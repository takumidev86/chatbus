import React from "react";
import { Container, CssBaseline, Grid } from "@material-ui/core";

interface Props {}

const App: React.FC<Props> = (props) => {
  // const [count, setCount] = useState<number>(0);

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          bus
        </Grid>
        <Grid item xs={6}>
          bus
        </Grid>
        <Grid item xs={3}>
          bus
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
