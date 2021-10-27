import React from 'react'
import { View,StyleSheet ,Text, TextInput} from 'react-native'
import Formcontainer from './formcontainer'
import Forminput from './Forminput'
import Formsignup from './Formsignup'

const Loginform = () => {
    return ( 
    <Formcontainer>
       <Forminput title='Email' placeholder='example@gmail.com'/>
       <Forminput title='Password' placeholder='************'/>
        <Formsignup title='Login'/>
    </Formcontainer>
    )
}

const styles = StyleSheet.create({
   
})

export default Loginform
