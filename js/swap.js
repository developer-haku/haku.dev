const namae = document.getElementById('namae')
const swap = s => namae.innerText = s;
const namae_data = n => namae.setAttribute('namae-data', n)


const names = ['HAKU', '博', 'HACK', 'ハック']
index = -1

setInterval(() => {
    index++
    index = index > 3 ? 0 : index
    swap(names[index])
    namae_data(names[index])
}, 2000)