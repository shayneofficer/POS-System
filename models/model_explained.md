# Restaurant and Menu DB Models

## Heirarchy

  Restaurant (Parent) - ref to menu
    A. Menu (Child) - ref to MenuCategory array
      1. MenuCategory - (Grand Child) - ref to MenuItem array
        a. Menu Items - (G G Child)

## Linking
  
#### To get a Restaurants full menu, you would:
  
  1. Populate the Restaurant with it's menu (and any other props you want)
  2. Populate the Menu(s) with Menu Categories
  3. Populate the Menu Categories with Menu Items