import { number, z, ZodType } from 'zod'
export type UserInput = {
    source: string, 
    amount: number, 
    date: Date
}

export type ExpenceProp = {
    currentBalance: number
    setCurrentBalance: React.Dispatch<React.SetStateAction<number>>
}

export type IncomeProp = {
    currentBalance: number
    setCurrentBalance: React.Dispatch<React.SetStateAction<number>>
}

export type TargetProp = {
    currentSaving: number
    progress: number
    userTarget: number
    setUserTarget : React.Dispatch<React.SetStateAction<number>>
    setProgress: React.Dispatch<React.SetStateAction<number>>
}

export type BalanceProp = {
    currentSaving: number
    setCurrentSaving: React.Dispatch<React.SetStateAction<number>>
    currentBalance: number
    userTarget: number
    setCurrentBalance: React.Dispatch<React.SetStateAction<number>>
    setProgress: React.Dispatch<React.SetStateAction<number>>
}

export const schema: ZodType<UserInput> = z.object({
    source: z.string().refine(value => value !== '', {message: "Source is required"}),
    amount: z.number().refine(value => value >= 0 , {message: 'Amount must be postive'}),
    date: z.date(),
})

export const targetSchema: ZodType<{target: number}> = z.object({
    target: z.number().refine(value => value >= 0 , {message: 'Target must be postive'}),
})

export const balanceSchema: ZodType<{saving: number}> = z.object({
    saving: z.number().refine(value => value >= 0 , {message: 'Target must be postive'}),
})