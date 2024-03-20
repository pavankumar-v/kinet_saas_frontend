import LogoutButton from '@/components/auth/LogoutButton'
import { Button } from '@/components/ui/button'
import AUTH0_CONFIG from '@/config/auth'
import { useAuth0 } from '@auth0/auth0-react'
import { config } from 'localforage'
import { LogOut } from 'lucide-react'
import React, { useEffect } from 'react'

type Props = {}

const Dashboard: React.FC<Props> = (props) => {
  const { user, isAuthenticated, getAccessTokenSilently, getAccessTokenWithPopup, getIdTokenClaims } = useAuth0();
  useEffect(() => {
    (async () => {
      try {
        const id_token = await getIdTokenClaims();
        console.log(id_token)
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://kinet-dev1024.us.auth0.com/api/v2/",
            scope: "read:current_user"
          },
        });
        console.log(token)
      } catch (e) {
        // Handle errors such as `login_required` and `consent_required` by re-prompting for a login
        // getAccessTokenWithPopup()
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <div>Dashboard
      <Button onClick={()=>getAccessTokenWithPopup()}> Get Token</Button>
    </div>
  )
}

export default Dashboard
