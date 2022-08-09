# Simple Shopping Cart

## Lessons

1. create react app
    1. npx create-react-app
    2. remove extra files

2. create website layout
    1. add Header, Main and Basket component
    2. Style component

3. create Main component
    1. create data.ts
    2. render product items

4. create Product component
    1. create product divs
    2. pass props to product component

5. implement cart
    1. add and remove items from the cart

6. create basket component
    1. list items in cartItems
    2. calculate sub total
    3. show checkout button

7. save cart items in local storage
    1. save items in local storage on add and remove
    2. useEffect to get items in localstorage

8. use useTransition and useDeferedValue
    1. read items in local storage using useTransition
    2. change cartItems.lenght to transition effects

9. deploy website on gitub pages
    1. login github account
    2. push code to github respository
    3. yarn add gh-pages -D
    4. package.json "homepage": "https://github_name.github.io/webapp_name",
    5. add deployment script: "predeploy": "npm run build", "deploy": "gh-pages -d build",
    6. yarn deploy

Tutorial https://www.youtube.com/watch?v=KK0B8AETwew

Link app https://jardelbordignon.github.io/react-18-shop/
