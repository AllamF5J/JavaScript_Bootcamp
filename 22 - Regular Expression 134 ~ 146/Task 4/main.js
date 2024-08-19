let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
  /.../i; => This creates a regular expression
  https? => That For check if the string contains http or https. The "?" after it makes it optional. Zero Or One..
  : => :
  \/\/ => Escape Sequence => //

  (?:[-\w]+\.)? => 
    (?:...) => that matches an optional subdomain.
    [-\w]+ => matches one or more word characters (letters, digits, or underscores) or hyphens.
    \. => => Escape Sequence => (.).
    (...)? => after the group makes it optional, so the subdomain part can be present or absent.
  ([-\w]+) => matches one or more word characters (letters, digits, or underscores) or hyphens.

  \.\w+ => 
    \. => => Escape Sequence => (.).
    \w+ matches one or more word characters for the TLD.

  (?:\.\w+)? => 
    (?:...) => is a non-capturing group.
    \.\w+ => matches a dot followed by one or more word characters.
    (...)? => makes this part optional.

  "?\/?.* =>
    \/? => matches an optional forward slash (/).
    .* => matches zero or more of any character (except for newlines), which covers the path and any query parameters in the URL.
*/