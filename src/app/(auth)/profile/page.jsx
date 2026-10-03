"use client";
import { toast } from "@heroui/react";

import { updateUser } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

export default function ProfilePage() {
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("profile er form er data", data);

    const id = toast.success("You have updated your name", {
      actionProps: {
        children: `${data.name}`,
        className: "bg-success text-success-foreground",
        onPress: () => toast.close(id),
      },
      description: "Your changes have been saved.",
    });

    const resData = await updateUser({
      name: data.name,
    });
    console.log(resData);
  };

  return (
    <div className="flex h-full max-w-xl flex-col items-center justify-center">
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        <Form className="w-full max-w-96" onSubmit={handleUpdateUser}>
          <Fieldset>
            <Fieldset.Legend>Profile Settings</Fieldset.Legend>
            <Description>Update your profile information.</Description>
            <FieldGroup>
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }

                  return null;
                }}
              >
                <Label>Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button
                type="submit"
                className="text-success-soft-foreground bg-black border"
                size="sm"
                variant="tertiary"
              >
                <FloppyDisk />
                Save changes
              </Button>
              <Button type="reset" variant="secondary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
}
