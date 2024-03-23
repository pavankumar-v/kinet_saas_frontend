import LogoutButton from '@/components/auth/LogoutButton'

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
