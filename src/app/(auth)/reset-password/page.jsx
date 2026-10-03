import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div>
            <h2>Reset Password Page</h2>
            <Suspense fallback="loading...">
                <ResetPasswordForm />
            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;