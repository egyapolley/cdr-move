const fs = require("fs")

const input_dir = "/home/inadmin/python-scripts/cdr_input"

const files = fs.readdirSync(input_dir)

if (files.length > 0) {
    files.forEach((item, index) => {
        if (index <= 45) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 45 && index <= 95) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_1/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 95 && index <= 145) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_2/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 145 && index <= 195) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_3/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 195 && index <= 245) {
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







