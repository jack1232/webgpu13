import { CreateWireframe } from './wireframe';
import { SphereWireframeData } from './vertex_data';
import { vec3 } from 'gl-matrix';
import $ from 'jquery';

const Create3DObject = async (radius:number, u:number, v:number, center:vec3, isAnimation:boolean) => {
    const wireframeData = SphereWireframeData(radius, u, v, center) as Float32Array;
    await CreateWireframe(wireframeData, isAnimation);
}

let radius = 2;
let u = 20;
let v = 15;
let center:vec3 = [0,0,0];
let isAnimation = true;

Create3DObject(radius, u, v, center, isAnimation);

$('#id-radio input:radio').on('click', function(){
    let val = $('input[name="options"]:checked').val();
    if(val === 'animation') isAnimation = true;
    else isAnimation = false;
    Create3DObject(radius, u, v, center, isAnimation);
});

$('#btn-redraw').on('click', function(){
    const val = $('#id-center').val();
    center = val?.toString().split(',').map(Number) as vec3;
    radius = parseFloat($('#id-radius').val()?.toString() as string);
    u = parseInt($('#id-u').val()?.toString() as string);
    v = parseInt($('#id-v').val()?.toString() as string);
    Create3DObject(radius, u, v, center, isAnimation);  
});