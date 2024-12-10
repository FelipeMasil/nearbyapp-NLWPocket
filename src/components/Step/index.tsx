import { Text, View } from "react-native";
import { IconProps } from '@tabler/icons-react-native'

import { s } from './styles'
import { colors } from "@/styles/colors";

type stepProps = {
    title: string,
    description: string,
    icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon:Icon } : stepProps){
    return(
        <View style={s.container}>
            {Icon && <Icon size={32} color={colors.red.base} />}
            <View style={s.details}>
                <Text style={s.title}> {title} </Text>
                <Text style={s.description}> {description} </Text>
            </View>

        </View>
    )
}