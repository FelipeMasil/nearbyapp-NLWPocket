import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Text, 
    TextProps,
    ActivityIndicator
} from "react-native";
import { IconProps } from '@tabler/icons-react-native'



import { s } from "./styles";
import { colors } from '@/styles/theme'



type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}

type IconButtonProps = {
    iconModel : React.ComponentType<IconProps>
}





function Button ({ children, isLoading = false, ...rest }: ButtonProps){
    return(
        <TouchableOpacity 
        disabled={isLoading}
        activeOpacity={0.8} 
        style={ s.container }
        {...rest}>
            {isLoading ? <ActivityIndicator size='small' color={colors.gray[100]}/> : <Text style={s.title}>{ children }</Text>}
        </TouchableOpacity>
    )
}

function Title({ children }: TextProps){
    return <Text style={ s.title }>{ children }</Text>
}


function Icon({ iconModel: Icon}: IconButtonProps){
    return <Icon size={24} color={colors.gray[100]}/>
}

Button.Title = Title
Button.Icon = Icon

export { Button }