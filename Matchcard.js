import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';

const MatchCard = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.contactCard}>
            <Card variant="elevation" style={{backgroundColor:"#d7e360"}}>
                <div className={classes.contactBody}>
                    <CardContent>
                        <Typography color="textPrimary" variant="h5" gutterBottom>
                            {props.no}
                        </Typography>
                        <Typography color="textPrimary" variant="h5">
                            {props.teamA} vs {props.teamB}
                        </Typography>
                        <Typography color="textPrimary" gutterBottom>
                            venue : {props.city}
                        </Typography>
                        <Typography variant="body2" component="p" color="textSecondary">
                            {props.date}
                        </Typography>
                    </CardContent>
                </div>
                {props.isAdmin &&
                <CardActions className={classes.contactAction}>

                    <ButtonGroup variant="outlined" >
                        <Button size="small" onClick={props.delete} color="secondary"><DeleteIcon /></Button>
                    </ButtonGroup>
                </CardActions>
                }
            </Card>
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    contactCard: {
        width: "22em",
        margin: "1rem",
    },
    contactBody: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 1rem",
        
    },
    contactAction: {
        margin: "0 1rem",
        display: "flex",
        justifyContent: "flex-end"
    }

}));

export default MatchCard;