export const Code = ({str}: {str: string}) => {
  return (
    <>
      {/* <Container className="codebox" maxWidth="md"> */}
      <pre>
        <code className="language-tsx">{JSON.stringify(codeModule)}</code>
      </pre>
      {/* </Container> */}
    </>
  );
};
