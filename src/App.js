import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Header from "./components/Header";
import { translateEnglishToPigLatin } from "./scripts/helper";
import { makeStyles } from "@material-ui/core";
import { generateRandomString } from "./scripts/helper";
import { TranslateOutlined, Create } from "@material-ui/icons";

const theme = createTheme({
  props: {
    MuiTextField: {
      variant: "outlined",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  grid: {
    margin: theme.spacing(1),
  },
	container: {
		textAlign: "center",
	}
}));

export default function App() {
  const classes = useStyles();
  const [english, setEnglish] = React.useState("");
  const [pigLatin, setPigLatin] = React.useState("");

  const handleChangeEnglish = (event) => {
    setEnglish(event.target.value);
  };

	const handleClickClear = () => {
		setEnglish("");
		setPigLatin("");
	};

  return (
    <ThemeProvider theme={theme}>
      <Header />
			<div className={classes.container}>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					direction="row"
					spacing={2}
				>
					<Grid item sm={7} className={classes.grid}>
						<TextField
							fullWidth
							multiline
							label="Enter English text to translate"
							InputProps={{
								inputComponent: TextareaAutosize,
								rows: 10,
							}}
							value={english}
							onChange={handleChangeEnglish}
						/>
					</Grid>
					<Grid item sm={7} className={classes.grid}>
						<TextField
							fullWidth
							multiline
							label="Pig Latin Output"
							InputProps={{
								inputComponent: TextareaAutosize,
								rows: 10,
							}}
							value={pigLatin}
						/>
					</Grid>
				</Grid>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={() => setPigLatin(translateEnglishToPigLatin(english))}
					startIcon={<TranslateOutlined />}
				>
					Translate
				</Button>
				<Button
					variant="contained"
					color="default"
					className={classes.button}
					onClick={() => setEnglish(generateRandomString())}
					startIcon={<Create />}
				>
					Random Input
				</Button>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					onClick={() => handleClickClear()}
					startIcon={<Create />}
				>
					Clear
				</Button>
			</div>
    </ThemeProvider>
  );
}
