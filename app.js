const fs = require("fs")

const input_dir = "/home/ocadmin/python-scripts/cdr_input"

const files = fs.readdirSync(input_dir)

/*if (files.length > 0) {
    files.forEach((item, index) => {
        if (index <= 25) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 25 && index <= 50) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_1/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 50 && index <= 75) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_2/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 75 && index <= 100) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_3/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 100 && index <= 125) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_4/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 125 && index <= 150) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_5/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 150 && index <= 175) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_6/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 175 && index <= 200) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_7/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 200 && index <= 225) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_8/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else if (index > 225 && index <= 250) {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_9/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
        else {
            let input_file = `${input_dir}/${item}`
            let output_file = `/home/inadmin/python-scripts/cdr-decoder_10/input_dir/${item}`
            fs.copyFileSync(input_file, output_file)

        }
    })
}*/

if (files.length >0 ){
    files.forEach((value, index) => {
       const idx = index % 50
        let input_file = `${input_dir}/${value}`
        let output_file = `/home/ocadmin/python-scripts/cdr-decoder_${idx}/input_dir/${value}`
        fs.copyFileSync(input_file, output_file)

    })
}







