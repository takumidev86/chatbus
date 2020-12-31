import React from "react";
import { Container, CssBaseline, Grid, Paper } from "@material-ui/core";
import Header from "./components/Header/Header";

interface Props {}

const App: React.FC<Props> = (props) => {
  // const [count, setCount] = useState<number>(0);

  return (
    <Container component="main" maxWidth="xl">
      <Header />
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper>item1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>item2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>item3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
