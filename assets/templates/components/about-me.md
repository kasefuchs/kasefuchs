<p align="center"><img src="./assets/images/wave.gif" width="64px" height="64px" /></p>
<h2 align="center">Hey There! I'm {{ user.name | default: user.login }}</h2>
<h3 align="center">I'm a <code>{{ data.me.birthday | time_between_timestamp: "year", 5 }}</code> year old fox who writes code to make computers do things</h3>
