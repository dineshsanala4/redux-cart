import CartItem from "../components/Cart/CartItem";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Cart_Item",
  component: CartItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["cartitem"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    item: { control: Product1 },
  },
};

export const Product1 = {
    args: {
        id: 1,
        title: "Test",
        price: "40$",
    },
  };
  

  export const Product2 = {
    args: {
        id: 2,
        title: "Test2",
        price: "40$",
    },
  };
  
  export const Product3 = {
    args: {
        id: 2,
        title: "Test3",
        price: "40$",
    },
  };
  