// USE THIS
// https://www.vuemastery.com/blog/minimalist-nuxt-authentication/

import { setUserSession, oauth } from "#imports";

export default oauth.googleEventHandler({
    async onSuccess(event, { user, tokens }) {
        // TODO: send user to C# backend

        await setUserSession(event, {
            user: {
                login: user.name,
                email: user.email,
                loggedInAt: new Date().toISOString(),
            },
        });
        return sendRedirect(event, "/dashboard");
    },
    onError(event, error) {
        return sendRedirect(event, "/");
    },
});
