import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import formatDate from "utils/formatDate";
import iconCalendar from "assets/images/icons/ic-calendar.svg";
