import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Formcontainer from './formcontainer'
import Forminput from './Forminput'
import Formsignup from './Formsignup'

const Signupform = () => {
    return <Formcontainer>
    <Forminput title='Full Name' placeholder='Manasseh Ameyow'/>
    <Forminput title='Email' placeholder='example@gmail.com'/>
    <Forminput title='Password' placeholder='************'/>
    <Forminput title='Confirm Password' placeholder='************'/>
        <Formsignup title='Sign Up'/>
  </Formcontainer>
}

const styles = StyleSheet.create({}
);

export default Signupform
