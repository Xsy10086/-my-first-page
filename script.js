const btn = document.querySelector('#changeB');

const tit = document.querySelector('h1');
function changetit()
{
if(tit.textContent.trim() ==='26级大数据')
 {
     tit.textContent = '努力成为全栈工程师ing';
 }
 else
 {
    tit.textContent = '26级大数据';
 }
}
btn.addEventListener('click',changetit);