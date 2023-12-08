# React-Filters-Url-Builder npm package

## Overview

The React-Filters-Url-Builder npm package is a react lightweight library that simplifies the process of creating and managing query strings for URLs. It provides a set of components to easily add filters and parameters to your query strings.

## Installation

You can install the package using npm:

```
npm i @needslist/react-filter-url-builder
```

## Usage

### Importing the package

```
import { Filter } from "@needslist/react-filter-url-builder";
```

### Creating a callback function to be used with the query string

```
	const handleOnChange = (queryString: string) => {
		// Do something with the query string
	};
```

### Use the filter component

```
			<Filter isOpen={boolean} onChange={handleOnChange}>
				<Filter.Item name="filter1" label="Filter 1" />
				<Filter.Item name="filter2" label="Filter 2" />
				<Filter.Item name="filter3" label="Filter 3" />
			</Filter>
```

## Contribution

Feel free to contribute by creating pull requests on the [GitHub repository](https://github.com/NeedsList/react-filters-url-builder).
