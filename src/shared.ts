export type ChatMessage = {
  id: string;
  content: string;
  user: string;
  role: "user" | "assistant";
};

export type Message =
  | {
      type: "add";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "update";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "all";
      messages: ChatMessage[];
    };

    export const names = [
      "Banana",
      "Zebra",
      "Cupcake",
      "Pineapple",
      "Giraffe",
      "Lemonade",
      "Tiger",
      "Waffle",
      "Cucumber",
      "Monkey",
      "Mango",
      "Donut",
      "Apple",
      "Watermelon",
      "Shark",
      "Cherry",
      "Popcorn",
      "Coconut",
      "Biscuit",
      "Peach"
    ];
    

