<h2 align="center">Github Stats</h2>
<p align="center">
  {%- for stat in data.statistics -%}
    {%- assign parameters = stat[1] | assign_property: "username", user.login -%}
    {%- include "../widgets/statistics/{{stat[0]}}" -%}
  {%- endfor -%}
</p>
