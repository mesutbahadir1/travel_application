import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./signin.style"
import {Formik} from "formik";
import * as Yup from 'yup';
import {useState} from "react";
import {COLORS, SIZES} from "../../constants/theme";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {HeightSpacer, ReusableBtn, WidthSpacer} from "../../components";

const validationSchema = Yup.object().shape({
    password: Yup.string().min(8, "Password must be at least 8 characters!").required("Required!"),
    userName: Yup.string().min(3, "Username must be at least 3 characters!").required("Required!"),
    email: Yup.string().email("Provide a valid e-mail!").required("Required!")
})
export default function Registration(){
    const [loader, setLoader] = useState(false)
    const [responseData, setResponseData] = useState(null)
    const [obsecureText, setObsecureText] = useState(false)
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{email: "", password: "",userName:""}}
                validationSchema={validationSchema}
                onSubmit={(value) => {
                    console.log(value)
                }}
            >
                {({
                      handleChange,
                      touched,
                      handleSubmit,
                      values,
                      errors,
                      isValid,
                      setFieldTouched
                  }) => (
                    <View style={{paddingTop: 20}}>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Username</Text>
                            <View>
                                <View style={styles.inputWrapper(touched.userName ? COLORS.gray : COLORS.lightGrey)}>
                                    <MaterialCommunityIcons
                                        name="face-man-profile"
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <WidthSpacer width={10}/>
                                    <TextInput
                                        placeholder={"Please enter your username!"}
                                        onFocus={() => {
                                            setFieldTouched('userName')
                                        }}
                                        onBlur={() => {
                                            setFieldTouched('userName', "")
                                        }}
                                        value={values.userName} //look here again
                                        onChangeText={handleChange('userName')}
                                        autoCapitalize={"none"}
                                        autoCorrect={false}
                                        style={{flex: 1}}
                                    />
                                </View>
                                {touched.userName && errors.userName && (
                                    <Text style={styles.errorMessage}>{errors.userName}</Text>
                                )}
                            </View>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>E-mail</Text>
                            <View>
                                <View style={styles.inputWrapper(touched.email ? COLORS.gray : COLORS.lightGrey)}>
                                    <MaterialCommunityIcons
                                        name="email-outline"
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <WidthSpacer width={10}/>
                                    <TextInput
                                        placeholder={"Please enter your e-mail!"}
                                        onFocus={() => {
                                            setFieldTouched('email')
                                        }}
                                        onBlur={() => {
                                            setFieldTouched('email', "")
                                        }}
                                        value={values.email} //look here again
                                        onChangeText={handleChange('email')}
                                        autoCapitalize={"none"}
                                        autoCorrect={false}
                                        style={{flex: 1}}
                                    />
                                </View>
                                {touched.email && errors.email && (
                                    <Text style={styles.errorMessage}>{errors.email}</Text>
                                )}
                            </View>
                        </View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Password</Text>
                            <View>
                                <View style={styles.inputWrapper(touched.password ? COLORS.gray : COLORS.lightGrey)}>
                                    <MaterialCommunityIcons
                                        name="lock-outline"
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <WidthSpacer width={10}/>
                                    <TextInput
                                        secureTextEntry={obsecureText}
                                        placeholder={"Please enter your password!"}
                                        onFocus={() => {
                                            setFieldTouched('password')
                                        }}
                                        onBlur={() => {
                                            setFieldTouched('password', "")
                                        }}
                                        value={values.password} //look here again
                                        onChangeText={handleChange('password')}
                                        autoCapitalize={"none"}
                                        autoCorrect={false}
                                        style={{flex: 1}}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {
                                            setObsecureText(!obsecureText);
                                        }}
                                    >
                                        <MaterialCommunityIcons
                                            name={obsecureText ? "eye-outline" : "eye-off-outline"}
                                            size={18}
                                        />
                                    </TouchableOpacity>

                                </View>
                                {touched.password && errors.password && (
                                    <Text style={styles.errorMessage}>{errors.password}</Text>
                                )}
                            </View>
                        </View>

                        <HeightSpacer height={20}/>

                        <ReusableBtn
                            onPress={handleSubmit}
                            btnText={"Register"}
                            width={SIZES.width-40}
                            backgroundColor={COLORS.green}
                            borderColor={COLORS.green}
                            borderWidth={0}
                            textColor={COLORS.white}
                        />

                    </View>
                )}
            </Formik>
        </View>
    );
}

