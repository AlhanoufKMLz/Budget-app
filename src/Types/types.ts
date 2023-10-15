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