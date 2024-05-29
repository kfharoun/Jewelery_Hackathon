# Jewelery_Hackathon

## Whiteboarding 
![modelseedoutline](https://i.imgur.com/Z2mHsPc.png)

## TaskList 

### Tuesday 
* Kass: Seed File 
* Vlad: Models File 
* Grace: Controller + Server Skeleton  
* All: Start on CRUD 

### Wednesday 
* All: Finish CRUD 
* Vlad + Grace: js functionality 
* Kass: CSS + HTML

### Thursday 
* All: Tie up loose ends 

# Whiteboarding 

![figmafile](https://i.imgur.com/EzmeiCL.png)

### when we open the page
* we want to see all products underneath the brand name and description 
    * order of information 
        * image 
        * product name
        * short product description
        * price 
* on the top right corner there is a functional search button 
    * there is a placeholder / button + input
    * info that can be pulled and used 
        * search by product type
        * search by product name
* every image is click-able 
    * when an image is clicked, it will take us to a product description page 
        * popup window would be easier 
* when commonera in the corner is clicked, we are taken back to the main page
* popup page: 
    * image + description beside the image 

### functions we need 
* click event for button, images/product title, and logo 
    * button: submit search 
    * images/product title: open description page (popup window)
    * logo: return to home page / refresh page 
* axios call to get api info into search box + on the page when onLoad 
