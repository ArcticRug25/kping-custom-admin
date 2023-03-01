const distanceOptions = [
    {
        value: '1',
        label: '1 km'
    },
    {
        value: '2',
        label: '2 km'
    },
    {
        value: '3',
        label: '3 km'
    },
    {
        value: '4',
        label: '4 km'
    }
]

export const leftDistanceOptions = [{ value: '0', label: '0 km' }, ...distanceOptions]

export const rightDistanceOptions = [...distanceOptions, { value: '5', label: '5 km' }]
