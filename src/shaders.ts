export const Shaders = () => {
    const vertex = `
        [[block]] struct Uniforms {
            mvpMatrix : mat4x4<f32>;
        };
        [[binding(0), group(0)]] var<uniform> uniforms : Uniforms;
        
        [[stage(vertex)]]
        fn main([[location(0)]] pos: vec4<f32>) ->  [[builtin(position)]] vec4<f32> {
            return uniforms.mvpMatrix * pos;     
        }`;

    const fragment = `
        [[stage(fragment)]]
        fn main() -> [[location(0)]] vec4<f32> {
            return vec4<f32>(1.0, 1.0, 0.0, 1.0);            
        }`;

    return {
        vertex, 
        fragment
    };
}
