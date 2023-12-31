import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { globalStyles } from '../style/Global'
import { Formik } from 'formik';
import { Button } from 'react-native';
import * as yup from 'yup'
import ButtonStyle from './Button';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (value) => {
            return parseInt(value) < 6 && parseInt(value) > 0;
        })
})

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values)
                }
                }>
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <ButtonStyle text='SUBMIT' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm