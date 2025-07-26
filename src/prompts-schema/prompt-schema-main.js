import chalk from "chalk"

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
        pattern: /^[1-2]$/,
        message: chalk.red.italic("Escolha uma opção válida: 1 para QRCODE ou 2 para PASSWORD"),
        required: true,
    },
]

export default promptSchemaMain;