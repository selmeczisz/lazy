import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../../util'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';




const productsUrl = 'https://raw.githubusercontent.com/kmagdi/json_images/main/products';

export const Products = () => {

    const {data, status, isLoading, isError}=useQuery(['products',productsUrl], getData)
    const navigate = useNavigate()

    /*status=='success' && console.log(data.products);*/

    if(isLoading) {
       <div>Loading</div>
       return}
    if(isError) { <div>Error!!!</div>
    return}

  return (
    <Box sx={{maxWidth:400, margin:'5px auto'}}>
         <List >
            {status=='success' && data.products.map(obj=>
                 <ListItem disablePadding key={obj.id} sx={{boxShadow:'3px 5px 5px gray', margin:'5px' }}>
                    <ListItemButton component="a" onClick={()=>navigate('/products/'+obj.id)}>
                        <ListItemText primary={obj.name} />
                    </ListItemButton>
                 </ListItem>
                )}
         
          
        </List>
    </Box>
  )
}
