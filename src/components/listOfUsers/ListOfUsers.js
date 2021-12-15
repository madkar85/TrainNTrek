import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Linusbild from '../../shared/img/Linus.jpg'
import Markooliobild from '../../shared/img/markoolio.JPG'
import Eliasbild from '../../shared/img/IkeaGlassOP.jpg'


// This is the status list box file, where you can see different users with their respective status updates.
export default function AlignItemsList() {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Elias äter glass' src={Eliasbild} />
        </ListItemAvatar>
        <ListItemText
          primary='Update'
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                Elias
              </Typography>
              {' — Gonna take a long walk!'}
            </>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Bild på Markoolio' src={Markooliobild} />
        </ListItemAvatar>
        <ListItemText
          primary='Update'
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                Markoolio
              </Typography>
              {' — This new biking path is sick!'}
            </>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Bild på Linus' src={Linusbild} />
        </ListItemAvatar>
        <ListItemText
          primary='Update'
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                Linus
              </Typography>
              {' — Going outside for todays exercise!'}
            </>
          }
        />
      </ListItem>
    </List>
  )
}
