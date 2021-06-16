const fs = require("fs")

const input_dir = "/home/inadmin/python-scripts/cdr_input"

const files = fs.readdirSync(input_dir)

if (files.length > 0) {
    files.forEach((item, index) => {
        if (index <= 50) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_1/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 50 && index <= 100) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_2/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 100 && index <= 150) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_3/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 150 && index <= 200) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_4/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_5/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
    })
}







