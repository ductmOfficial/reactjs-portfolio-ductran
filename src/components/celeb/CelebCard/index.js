// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// project imports
import { StyledAvatar } from 'components/mui-extended';
import { borderRadius } from 'constants/theme';
import { TCast } from 'types';
import { generateImageUrl } from 'utils/movie';

const CARD_HEIGHT = 80;

const CelebCard = ({ ...props }) => (
  <Box sx={{ bgcolor: 'background.default', borderRadius: borderRadius(`${CARD_HEIGHT}px`) }}>
    <Box display="flex" alignItems="center" gap={1} pr={1}>
      <StyledAvatar
        alt={props.name}
        src={generateImageUrl('profile', props.profile_path)}
        sx={{ width: CARD_HEIGHT, height: CARD_HEIGHT }}
      />
      <Box>
        <Typography variant="h5" noWrap>
          {props.name}
        </Typography>
        <Typography variant="caption" noWrap>
          {props.character}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default CelebCard;

CelebCard.propTypes = TCast;
