<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wpuser');

/** MySQL database password */
define('DB_PASSWORD', 'wpuser');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
 define('AUTH_KEY',         '5Dgi.8-.`U[:%pBE]zbWQM+)6!3G .i|]WCSF}2SSx0eM1Nj|aC<3N~]4iYe~ !r');
 define('SECURE_AUTH_KEY',  '_9OANFNH+X<g@YcGZ]<)vI`lcR7/+9}o=<&zY _@dPd-Gpc7N+48(xN*lvuHas!=');
 define('LOGGED_IN_KEY',    'L.a$c-F+fLOTyzk|b[iVO#oa]_~NOl1llTN<Oo? AQh<5/`T_D*F@4Rx!?(%@aT8');
 define('NONCE_KEY',        'RY::y*m(+;Js5iKO%uXPcc0ztRC$MdO!G(nx*,GhKV%[c<%im0}<WT-,+;+mo2?x');
 define('AUTH_SALT',        '-]WX-x3!^qhh|^A%p3moM&l5%f-6&U!L-x<9GaA*Da25M5T20zUYjT[~y`6I^lwz');
 define('SECURE_AUTH_SALT', 'mL1W#2X~#64c98][8{]-#2*K&6`C,>sF]pJ3(IS?<+%wf1[2yoXTasO1+wGv[jy^');
 define('LOGGED_IN_SALT',   '/RC[VyqL&{?33~hI}[$^G1-o?KFx;>l03LQMi%k&%(^rm0tk^YePW8Q0,4g?+keH');
 define('NONCE_SALT',       '}fk|v-r,AN`18Nj}MGg=uk{wOY(^)-)#]!imy&h<o08$+%+!-bx||}|>dM5<[Wi^');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'hb_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
