declare module "*.svg" {
  global {
    type Svg = React.FC<React.SVGProps<React.ReactSVGElement>>;
  }
  const content: Svg;
  export default content;
}

declare module "*.eot";
declare module "*.woff";
declare module "*.woff2";
declare module "*.ttf";

declare module "react16-spinjs";
declare module "react-animations";
declare module "react-transition-group";
declare module "markdown";
declare module "intersection-observer";
