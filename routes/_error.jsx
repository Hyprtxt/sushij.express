export default function ErrorPage(props: PageProps) {
  const error = props.error; // Contains the thrown Error or HTTPError
  if (error instanceof HttpError) {
    const status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === 404) {
      return (
        <>
          <Head>
            <title>Sushi J Express | 404 Error Page</title>
          </Head>
          <Layout data={props}>
            <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white">
              <h2>
                404 Error
              </h2>
              <p>
                We couldn't find the thing you asked for.
              </p>
            </section>
          </Layout>
        </>
      )
    }
  }

  return <h1>Oh no...</h1>;
}
