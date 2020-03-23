# CalcMc
Hosted [on a github page](https://terminator8989.github.io),
CalcMc is a tool for Minecraft that will calculate the shortest way to reach a destination, just by enter your actual minecraft position in your world and your destination position

### How to use it ?
CalcMc will give you two things:
1. At how many degrees you will to orient your minecraft skin to the right direction
2. The number of blocks that you will have to travel

*If you press the F3 key, in Minecraft, you will be able to look at how many degrees you are oriented*
### How it works ?
To calculate those things, this program will use 4 variables:
1. x: the X coordinate of the client
2. z: the Z coordinate of the client
3. dx: the X coordinate of the destination of the client
4. dz: the Z coordinate of the destination of the client

To calculate the distance, the program will use the Pythagorean theorem:

![imgur link](https://i.imgur.com/7AnsgCk.png)

But, to calculate the angle, this is a little bit more complex: here, we will use an arctangent of a tangent, we know the tangent: in trigonometry, the tangent is the opposite side of the angle divide by the adjacent side of the angle. the opposite side is dx-x, and the adjacent side is dz-z. And, because the javascript function return a radiant value, we will convert it into degrees by a litte formula: 180 divided by the number PI. Finally, we have this formula:

![imgur link](https://i.imgur.com/oGdxU5R.png)

After all those calculations, we need to convert the value of the angle for Minecraft, beacause the minecraft dimension is not like this:

![mcp](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-4f2307394c4f22261f62696c968730d6&f=1&nofb=1),

but like this:

![mcp2](https://gamepedia.cursecdn.com/minecraft_gamepedia/e/e9/Minecraft_axes.png?version=73720bb0362472155432f5ad0aad2118)
