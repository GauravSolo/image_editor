const smsinfo = document.querySelector('#smsinfo');
// const imagebtn = document.querySelector('#imagebtn');
const paxis = document.querySelectorAll('.paxis');
const imagename = document.querySelector('#imageeditor');
const warnsms = document.querySelector('.warnsms');
const save_image = document.querySelector('#save_image');
const fonts = document.querySelector('#fonts');

  function hexTorgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
  }

  save_image.disabled = true;

  function imageeditor(){
        var top = document.querySelector('#top').value;
        var left = document.querySelector('#left').value;
        var text = document.querySelector('#textinput').value;
        var imageeditorlen = imagename.files['length'];
        save_image.disabled = true;
        var selectfont = document.querySelector("#fonts");
        var font = selectfont.options[selectfont.selectedIndex].text;
        
        if(imageeditorlen == 0)
        {
            return;
        }


        var ext = imagename.files[0].type.split('/')[1];
        if(ext === 'png' || ext === 'jpeg' || ext === 'gif')
        {
            console.log(imagename.files[0].type);
        }else {
            warnsms.classList.add('imageextwarn');
            console.log(imagename.files[0].type);
            setTimeout(()=>warnsms.classList.remove('imageextwarn'),3000);
            return;
        }

        
        if(top == '' )
            top = 0;
        if(left == '')
            left = 0;

        [R, G, B] = hexTorgb(document.querySelector('.clrpicker').value);
              
    
        // imagebtn.innerText = 'Processing...';
        document.querySelector('#imagediv').innerHTML = `<div class="text-center my-5">
        <div class="spinner-grow text-primary" style="width: 4rem; height: 4rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;
        const xhr = new XMLHttpRequest();
        
        xhr.open('POST','add_text_to_image.php',true);
        xhr.responseType = 'blob';
        xhr.onload = ()=>{
            if(xhr.status === 200)
            {
                console.log(xhr.response);
                var blb = new Blob([xhr.response]);
                var url = (window.URL || window.webkitURL).createObjectURL(blb);
    
                document.querySelector('#imagediv').innerHTML = `<a href="${url}" download="gauravsolo_image.${ext}"><img src="${url}"  style="width:100%;height:100%;object-fit:content;"></a>`;
                document.querySelector('#aimg').setAttribute('href',url);
                document.querySelector('#aimg').setAttribute('download',`gauravsolo_image.${ext}`);
                // imagebtn.innerText = 'Submit';
                save_image.disabled = false;
            }
        };
        
        const formdata = new FormData(document.querySelector('#imageform'));
        formdata.append('R',R);
        formdata.append('G',G);
        formdata.append('B',B);
        formdata.append('ext',ext);
        formdata.append('font',font);

        console.log([...formdata]);
        xhr.send(formdata); 
  }

paxis.forEach((element)=>{
    element.addEventListener('input',()=>{
        imageeditor();
        console.log('input');
        document.querySelector('#textinput').style = `color:${document.querySelector('.clrpicker').value} !important`;
    })
});
document.querySelector('#rotationtext').addEventListener('change',()=>imageeditor());
document.querySelector('#rotationimage').addEventListener('change',()=>imageeditor());


async function getImage(){
    try{
        var response = await fetch('https://api.unsplash.com/photos/random?client_id=LAKL6ewTzpuM0vFPTO3RQTXH-7gAc-Iz_JM3vJFaBZ8');
        if(response.status == 403)
        {
            response = await fetch('https://api.pexels.com/v1/search?query=nature&page=1&per_page=1',{method: 'GET', headers:{Accept: 'application/json',Authorization: '563492ad6f91700001000001c09b528ee60c4ff7a2a0ec6a25c74e45'}});
        }
        var data = await response.json();
        // console.log(data);
        if(response.status == 403)
        {
            var url = data['photos']['0']['src']['large'];
        }else
        {
            var url = data['urls']['regular'];
        }

        
        // console.log(url);
        document.querySelector('#body').style = `background:url(${url});margin:0 !important; padding:0 !important;background-position: center;background-repeat: no-repeat;background-size: cover;backdrop-filter: blur(40px);`;
    }catch(error){
        console.log(error);
    }
}
getImage();

