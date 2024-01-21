import {  createTamagui } from 'tamagui'
import { config as configBase } from '@tamagui/config/v2'

export const config = createTamagui(configBase)
// this makes typescript properly type everything based on the config

type Conf = typeof config

declare module 'tamagui' {

  interface TamaguiCustomConfig extends Conf {}

}