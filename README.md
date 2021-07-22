# Super basic macro mouse clicker

Super basic macro without recording. You can edit this code and add whatever you want. If you want recording you can add it in your code.

This repo is created to help others with searching npm modules to do macro.

`robotjs` gives ability to execute keyboard and mouse moves and clicks. `iohook` gives ability to listen if any key was clicked and if any mouse movemnent or click.

## Controls
### Start / Pause / Resume
- Press <kbd>Shift</kbd>+<kbd>Z</kbd>

### Stop
- Press <kbd>Shift</kbd>+<kbd>Esc</kbd>

## How To Install
- You must have: [NodeJS](https://nodejs.org/) >= v14.15.3
- download it
- in console type <kbd>npm i</kbd>
- run command <kbd>npm start</kbd>
- and macro is working.

## How to change mouse clicks
- Go to file <kbd>config.json</kbd>
- change value <kbd>clickInterval</kbd> to any other number. **( NUMBER MUST BE IN MILLISECODS**, 1000ms = 1s, default: 200ms **)**

## Milliseconds to CPS table
Tested in 5 seconds test

<table>
    <tr>
        <th>ms</th>
        <th>CPS</th>
    </tr>
    <tr>
        <td>250</td>
        <td>4.0</td>
    </tr>
    <tr>
        <td>200</td>
        <td>5.0</td>
    </tr>
    <tr>
        <td>150</td>
        <td>6.6</td>
    </tr>
    <tr>
        <td>100</td>
        <td>9.2</td>
    </tr>
    <tr>
        <td>90</td>
        <td>10.8</td>
    </tr>
    <tr>
        <td>80</td>
        <td>10.8</td>
    </tr>
    <tr>
        <td>70</td>
        <td>13.0</td>
    </tr>
    <tr>
        <td>60</td>
        <td>16.0</td>
    </tr>
    <tr>
        <td>50</td>
        <td>16.2</td>
    </tr>
    <tr>
        <td>40</td>
        <td>~21.4</td>
    </tr>
    <tr>
        <td>30</td>
        <td>~30.8</td>
    </tr>
    <tr>
        <td>20</td>
        <td>~32.2</td>
    </tr>
    <tr>
        <td>10</td>
        <td>~58</td>
    </tr>
</table>