const data= [
{
    title: `room`,
    src: `IMG/room1.jpg`,
    category: `Rooms`
},
{
    title: `room`,
    src: `IMG/room2.jpg`,
    category: `Rooms`
},
{
    title: `room`,
    src: `IMG/room3.jpg`,
    category: `Rooms`
},
{
    title: `room`,
    src: `IMG/gallery1.jpg`,
    category: `Rooms`
},
{
    title: `room`,
    src: `IMG/gallery3.jpg`,
    category: `Rooms`
},
{
    title: `rest zone`,
    src: `IMG/gallery4.jpg`,
    category: `Entertainment`
},
{
    title: `rest zone`,
    src: `IMG/gallery6.jpg`,
    category: `Entertainment`
},
{
    title: `rest zone`,
    src: `IMG/gallery7.jpg`,
    category: `Entertainment`
},
{
    title: `rest zone`,
    src: `IMG/gallery8.jpg`,
    category: `Entertainment`
},
{
    title: `rest zone`,
    src: `IMG/gallery9.jpg`,
    category: `Entertainment`
},
{
    title: `rest zone`,
    src: `IMG/gallery10.jpg`,
    category: `Entertainment`
},
{
    title: `rest zone`,
    src: `IMG/gallery10.jpg`,
    category: `Entertainment`
},
{
    title: `rest zone`,
    src: `IMG/gallery11.jpg`,
    category: `Entertainment`
}
];

let topContent = document.getElementById(`top_content`);
let topContentItems = document.getElementById(`top_content_items`);
let categories = [];
for (let topContentItems of data) {
  categories.push(topContentItems.category)
};
categories = [...new Set(categories)];
let outputFilter = `<button>${`All pictures`} </button>`;
for(let category  of categories){
    outputFilter+= `<button>${category}</button>`
}
topContent.innerHTML = outputFilter

let outputFilterItems = ``;
for(let topContentItems in data){
    outputFilterItems +=`
        <div class="top_content_items">
           <img src=$(item.src) alt="">
           <h3>${topContentItems.title}</h3>
           <p>${topContentItems.category}</p>
        </div>`
}
topContentItems.innerHTML = outputFilterItems;