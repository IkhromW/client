import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClasses } from '../redux/action'

export default function Welcome() {
    const user = useSelector(({userReducer}) => userReducer.user)
    const classes = useSelector(({classReducer}) => classReducer.classes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchClasses("https://api.dsarea.com/api/class"))
    },[dispatch])

    console.log(user, classes, '<<<');

    const addToCart = () => {
        axios
          .post("https://api.dsarea.com/api/cart", {
              _id: classes[0]._id,
              title: classes[0].title,
              price: classes[0].price.regular,
              benefit: classes[0].benefit,
              description: classes[0].description,
              infoTraining: classes[0].infoTraining,
              learningMaterial: classes[0].learningMaterial
          }, {
              withCredentials: true
          })
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
    }

    const deleteCart = () => {
        axios
            .delete(`http://api.dsarea.com/api/cart/${classes[0]._id}` ,{withCredentials: true})
            .then(res => console.log(res.data.data))
            .catch(err => console.log(err))
    }

    const showCart = () => {
        axios
            .get("http://api.dsarea.com/api/cart", {withCredentials: true})
            .then(res => console.log(res.data.data))
            .catch(err => console.log(err) )

    }
  return (
    <div>
        Welcome
        {' '+user.fullname}

        <button onClick={addToCart}> Add To Cart</button>
        <button onClick={deleteCart}>Delete cart</button>
        <button onClick={showCart}>Show Cart</button>
    </div>
  )
}
