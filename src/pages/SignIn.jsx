
import ButtonUI from "../components/button"
import { useForm } from "react-hook-form"
import CardAuth from "../components/cardAuth"
import { Field, Input, Stack } from "@chakra-ui/react"
import { usernameValidation } from "../lib/validation"

const SignIn = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 0)
        })
    }



    return <CardAuth handleSubmit={handleSubmit} onSubmit={onSubmit} title="ВХІД" description="Спробуй нові відчуття" link="/signup" linkText="Зареєструватися" buttonText="Вхід" >
        <Stack gap="4" w="full">
            <Field.Root invalid={errors.name} required>
                <Field.Label>
                    Нікнейм
                    <Field.RequiredIndicator />
                </Field.Label>
                <Input  {...register('username', usernameValidation)} />
                {errors.name && <Field.ErrorText>{errors.name.message}</Field.ErrorText>}
            </Field.Root>
            <Field.Root invalid={errors.password} required>
                <Field.Label>
                    Пароль
                    <Field.RequiredIndicator />
                </Field.Label>
                <Input  {...register('password', {
                    required: 'Це поле є обов\'язковим',
                })} />
                {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
            </Field.Root>
        </Stack>
    </CardAuth>
};

export default SignIn;

