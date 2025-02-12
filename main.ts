player.onChat("planta", function (Petal_type) {
    if (Petal_type == 1) {
        blocks.fill(
        OXEYE_DAISY,
        pos(4, 0, 4),
        pos(-4, 0, -4),
        FillOperation.Replace
        )
    }
    if (Petal_type == 2) {
        blocks.fill(
        ORANGE_TULIP,
        pos(4, 0, 4),
        pos(-4, 0, -4),
        FillOperation.Replace
        )
    }
})
let Petal_type = ""
player.say("Escribe 1 para margarita y 2 para Tulipan, después del comando 'planta'.")
