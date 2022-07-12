const random_colors = [
    "#016FB9",
    "#22AED1",
    "#6D8EA0",
    "#AFA98D",
    "#01BAEF",
    "#0CBABA",
    "#380036",
    "#6622CC",
    "#30BCED",
    "#303036",
    "#FC5130",
    "#98CE00",
    "#F7B538",
    "#DB7C26",
    "#FF8811",
    "#9DD9D2"
]

export const random_color = () =>{
    return random_colors[Math.floor(Math.random() * random_colors.length)]
}