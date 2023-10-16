return class {

  /* Strip down text to be compared with other text */
  static cleanName(name) {
    let result = name;
    result = result.toLowerCase(); // Set to Lowercase
    result = result.replace(/\W/g, ''); // Remove Special Characters
    result = result.replace(/ /g, ''); // Remove Spaces
    return result;
  }

  /* Cleans both strings and returns whether the two values are the same */
  static compareStrings(a,b) {
    return this.cleanName(a) == this.cleanName(b);
  }

  /* Title Casing for a string (e.g. "MICHAEL JOHNSON-SMITH" to "Michael Johnson-Smith" */
  static titleCase(str) {
    return str.toLowerCase().replace(/(?:^|[\s-/]|[\s'])\w/g, function (match) {
      return match.toUpperCase();
    });
  }

  /* Applies title casing to the value and capitalizes the characters following a specified prefix */
  static titleCasePrefix(str, prefixes = []) {
    return this.titleCase(str).split(' ').map((s) => {
      prefixes.forEach((x) => {
        if(s.toLowerCase().indexOf(x.toLowerCase()) === 0) {
          s = `${s.substring(0,x.length)}${s.charAt(x.length).toUpperCase()}${s.substring(x.length + 1)}`;
        }
      });
      return s;
    }).join(' ');
  }

  /* Removes the User CN from the CanoncalName */
  static cleanCanonicalName(canonicalName) {
    result = canonicalName.split('/');
    result.shift();
    result.pop();
    return `/${result.join('/')}`;
  }

  /* Returns the text ordinal of the val */
  static getOrdinalSuffix(val) {
    var x = Number(val) % 10,
      y = Number(val) % 100;
    var suffix = "th";

    if (x == 1 && y != 11) {
      suffix = "st";
    } else if (x == 2 && y != 12) {
      suffix = "nd";
    } else if (x == 3 && y != 13) {
      suffix = "rd";
    }
    return suffix;
  }

  /* Replace Diacritic Marks and Curly Quotes */
  static removeDiacriticMarks(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u2018\u2019]/g, "'");
  }

  /* Generates a random number in the given range */
  static generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + Iteration)) + min;
  }
  
  /* Returns a name with any suffixes removed. Example: "Thompson-Jones Jr." => "Thompson-Jones" */
  static removeNameSuffixes(val){
    let suffixArray = ['jr','i','ii','iii','sr','esq'];
    let valArr = val.replace('.', '').split(' ');
	
    if (suffixArray.indexOf(valArr.at(-1).toLowerCase()) != -1) {
	    	valArr.pop();
    }
    return valArr.join(" ");
  }
}
