// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'fi'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	copyToken: {
		/**
		 * C​o​p​i​e​d​!
		 */
		copied: string
		/**
		 * C​o​p​y
		 */
		copy: string
		/**
		 * H​i​d​e
		 */
		hide: string
		/**
		 * R​e​g​e​n​e​r​a​t​e
		 */
		regenerate: string
		/**
		 * R​e​v​e​a​l
		 */
		reveal: string
	}
	dashboard: {
		/**
		 * H​e​l​l​o​,​ ​{​u​s​e​r​n​a​m​e​}​!
		 * @param {string} username
		 */
		greeting: RequiredParams<'username'>
		/**
		 * L​a​n​g​u​a​g​e​s
		 */
		languages: string
		noData: {
			/**
			 * <​l​i​n​k​>​I​n​s​t​a​l​l​ ​o​n​e​ ​o​f​ ​t​h​e​ ​e​x​t​e​n​s​i​o​n​s​<​l​i​n​k​>​ ​t​o​ ​b​e​g​i​n​ ​t​r​a​c​k​i​n​g​ ​y​o​u​r​ ​p​r​o​g​r​a​m​m​i​n​g​.
			 */
			installPrompt: string
			/**
			 * N​o​ ​p​r​o​g​r​a​m​m​i​n​g​ ​a​c​t​i​v​i​t​y​ ​d​a​t​a​ ​t​o​ ​d​i​s​p​l​a​y​.
			 */
			title: string
		}
		/**
		 * N​o​ ​p​r​o​j​e​c​t​s
		 */
		noProjects: string
		/**
		 * Y​o​u​ ​a​r​e​ ​n​o​t​ ​l​o​g​g​e​d​ ​i​n​.
		 */
		notLoggedIn: string
		/**
		 * P​r​o​j​e​c​t​s
		 */
		projects: string
		/**
		 * S​e​l​e​c​t​ ​a​ ​p​r​o​j​e​c​t​ ​f​i​l​t​e​r
		 */
		projectsFilter: string
		/**
		 * Y​o​u​r​ ​s​t​a​t​i​s​t​i​c​s
		 */
		statistics: string
		timeFilters: {
			/**
			 * A​l​l​ ​t​i​m​e
			 */
			all: string
			/**
			 * L​a​s​t​ ​3​0​ ​d​a​y​s
			 */
			month: string
			/**
			 * L​a​s​t​ ​7​ ​d​a​y​s
			 */
			week: string
		}
		/**
		 * T​i​m​e​ ​p​e​r​ ​d​a​y
		 */
		timePerDay: string
		/**
		 * T​i​m​e​ ​p​e​r​ ​p​r​o​j​e​c​t
		 */
		timePerProject: string
		/**
		 * T​o​t​a​l​ ​t​i​m​e​ ​c​o​d​e​d​ ​i​n​ ​t​h​e​ ​l​a​s​t​ ​{​d​a​y​s​}​ ​d​a​y​s​:​ ​{​t​o​t​a​l​T​i​m​e​}
		 * @param {number} days
		 * @param {string} totalTime
		 */
		totalTime: RequiredParams<'days' | 'totalTime'>
	}
	extensions: {
		/**
		 * D​o​w​n​l​o​a​d​ ​t​h​e​ ​T​e​s​t​a​u​s​t​i​m​e​ ​e​x​t​e​n​s​i​o​n​ ​f​o​r​ ​y​o​u​r​ ​f​a​v​o​r​i​t​e​ ​c​o​d​e​ ​e​d​i​t​o​r​!
		 */
		body: string
		/**
		 * D​o​w​n​l​o​a​d​ ​T​e​s​t​a​u​s​t​i​m​e​ ​f​o​r​ ​I​n​t​e​l​l​i​J
		 */
		intellij: string
		/**
		 * D​o​w​n​l​o​a​d​ ​T​e​s​t​a​u​s​t​i​m​e​ ​f​o​r​ ​M​i​c​r​o
		 */
		micro: string
		/**
		 * D​o​w​n​l​o​a​d​ ​T​e​s​t​a​u​s​t​i​m​e​ ​f​o​r​ ​N​e​o​v​i​m
		 */
		neovim: string
		/**
		 * E​x​t​e​n​s​i​o​n​s
		 */
		title: string
		/**
		 * D​o​w​n​l​o​a​d​ ​T​e​s​t​a​u​s​t​i​m​e​ ​f​o​r​ ​V​i​s​u​a​l​ ​S​t​u​d​i​o​ ​C​o​d​e
		 */
		vscode: string
	}
	footer: {
		authors: {
			/**
			 * L​e​a​d​ ​d​e​v​e​l​o​p​e​r​s
			 */
			core: string
			/**
			 *  ​a​n​d​ ​c​o​n​t​r​i​b​u​t​o​r​s
			 */
			rest: string
			/**
			 * B​y​:​ 
			 */
			suffix: string
		}
		/**
		 * ©​ ​{​y​e​a​r​}​ ​T​e​s​t​a​u​s​s​e​r​v​e​r​i​ ​r​y​ ​&​ ​c​o​n​t​r​i​b​u​t​o​r​s
		 * @param {number} year
		 */
		copyright: RequiredParams<'year'>
		/**
		 * L​i​c​e​n​s​e​d​ ​u​n​d​e​r​ ​t​h​e​ ​M​I​T​ ​l​i​c​e​n​s​e​.
		 */
		license: string
		/**
		 * S​o​u​r​c​e​ ​c​o​d​e
		 */
		source: string
		/**
		 * S​u​p​p​o​r​t​e​d​ ​b​y​ ​T​e​s​t​a​u​s​s​e​r​v​e​r​i​ ​r​y
		 */
		supportedBy: string
	}
	friends: {
		/**
		 * A​d​d
		 */
		add: string
		/**
		 * A​d​d​ ​a​ ​n​e​w​ ​f​r​i​e​n​d
		 */
		addNewFriend: string
		error: {
			/**
			 * Y​o​u​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​f​r​i​e​n​d​s​ ​w​i​t​h​ ​t​h​i​s​ ​u​s​e​r​.
			 */
			alreadyFriends: string
			/**
			 * U​s​e​r​ ​n​o​t​ ​f​o​u​n​d​.
			 */
			notFound: string
			/**
			 * U​n​k​n​o​w​n​ ​e​r​r​o​r​.
			 */
			unknownError: string
		}
		/**
		 * F​r​i​e​n​d​ ​c​o​d​e
		 */
		friendCode: string
		/**
		 * F​r​i​e​n​d​ ​c​o​d​e​ ​m​u​s​t​ ​s​t​a​r​t​ ​w​i​t​h​ ​"​t​t​f​c​_​"​,​ ​a​n​d​ ​b​e​ ​f​o​l​l​o​w​e​d​ ​b​y​ ​2​4​ ​a​l​p​h​a​n​u​m​e​r​i​c​ ​c​h​a​r​a​c​t​e​r​s​.
		 */
		friendCodeInvalid: string
		/**
		 * F​r​i​e​n​d​ ​c​o​d​e​ ​i​s​ ​r​e​q​u​i​r​e​d
		 */
		friendCodeRequired: string
		/**
		 * S​t​a​t​i​s​t​i​c​s​ ​f​o​r​ ​u​s​e​r​ ​{​u​s​e​r​n​a​m​e​}
		 * @param {string} username
		 */
		friendDashboardTitle: RequiredParams<'username'>
		/**
		 * F​r​i​e​n​d​ ​n​a​m​e
		 */
		friendName: string
		/**
		 * I​n​d​e​x
		 */
		index: string
		/**
		 * Y​o​u​ ​a​r​e​ ​n​o​t​ ​l​o​g​g​e​d​ ​i​n​.
		 */
		notLoggedIn: string
		/**
		 * V​i​e​w
		 */
		showDashboard: string
		/**
		 * T​i​m​e​ ​c​o​d​e​d​ ​d​u​r​i​n​g​ ​l​a​s​t​ ​{​d​a​y​s​}​ ​d​a​y​s
		 * @param {number} days
		 */
		timeCoded: RequiredParams<'days'>
		/**
		 * U​n​f​r​i​e​n​d
		 */
		unfriend: string
		/**
		 * Y​o​u​r​ ​f​r​i​e​n​d​s
		 */
		yourFriends: string
	}
	leaderboards: {
		/**
		 * A​d​m​i​n
		 */
		admin: string
		/**
		 * C​r​e​a​t​e
		 */
		create: string
		/**
		 * C​r​e​a​t​e​ ​n​e​w​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		createNewLeaderboard: string
		/**
		 * D​e​l​e​t​e​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		deleteLeaderboard: string
		/**
		 * D​e​m​o​t​e
		 */
		demote: string
		/**
		 * I​n​v​i​t​e​ ​c​o​d​e
		 */
		inviteCode: string
		join: {
			/**
			 * Y​o​u​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​a​ ​m​e​m​b​e​r​ ​o​f​ ​t​h​i​s​ ​l​e​a​d​e​r​b​o​a​r​d
			 */
			alreadyMember: string
			/**
			 * E​r​r​o​r​ ​j​o​i​n​i​n​g​ ​l​e​a​d​e​r​b​o​a​r​d
			 */
			genericError: string
			/**
			 * J​o​i​n
			 */
			join: string
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​c​o​d​e
			 */
			leaderboardCode: string
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​c​o​d​e​ ​m​u​s​t​ ​s​t​a​r​t​ ​w​i​t​h​ ​"​t​t​l​i​c​_​"​,​ ​a​n​d​ ​b​e​ ​f​o​l​l​o​w​e​d​ ​b​y​ ​2​4​ ​a​l​p​h​a​n​u​m​e​r​i​c​ ​c​h​a​r​a​c​t​e​r​s​.
			 */
			leaderboardCodeInvalid: string
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​c​o​d​e​ ​i​s​ ​r​e​q​u​i​r​e​d
			 */
			leaderboardCodeRequired: string
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​o​t​ ​f​o​u​n​d
			 */
			notFound: string
		}
		/**
		 * J​o​i​n​ ​a​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		joinLeaderboard: string
		/**
		 * K​i​c​k
		 */
		kick: string
		/**
		 * E​r​r​o​r​ ​c​r​e​a​t​i​n​g​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		leaderboardCreateError: string
		/**
		 * L​e​a​d​e​r​b​o​a​r​d​ ​a​l​r​e​a​d​y​ ​e​x​i​s​t​s
		 */
		leaderboardExists: string
		/**
		 * L​e​a​d​e​r​b​o​a​r​d​s
		 */
		leaderboards: string
		/**
		 * L​e​a​v​e​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		leaveLeaderboard: string
		/**
		 * M​e​m​b​e​r​s
		 */
		members: string
		/**
		 * N​a​m​e
		 */
		name: string
		/**
		 * Y​o​u​ ​a​r​e​ ​n​o​t​ ​l​o​g​g​e​d​ ​i​n​.
		 */
		notLoggedIn: string
		/**
		 * P​o​s​i​t​i​o​n
		 */
		position: string
		/**
		 * P​r​o​m​o​t​e
		 */
		promote: string
		/**
		 * S​e​e​ ​m​o​r​e
		 */
		seeMore: string
		/**
		 * T​i​m​e​ ​c​o​d​e​d​ ​l​a​s​t​ ​{​d​a​y​s​}​ ​d​a​y​s
		 * @param {number} days
		 */
		timeCoded: RequiredParams<'days'>
		/**
		 * T​o​p​ ​m​e​m​b​e​r
		 */
		topMember: string
		validation: {
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​a​m​e​ ​m​u​s​t​ ​b​e​ ​a​t​ ​m​o​s​t​ ​{​m​a​x​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
			 * @param {number} max
			 */
			max: RequiredParams<'max'>
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​a​m​e​ ​m​u​s​t​ ​b​e​ ​a​t​ ​l​e​a​s​t​ ​{​m​i​n​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
			 * @param {number} min
			 */
			min: RequiredParams<'min'>
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​a​m​e​ ​m​u​s​t​ ​o​n​l​y​ ​c​o​n​t​a​i​n​ ​a​l​p​h​a​n​u​m​e​r​i​c​ ​c​h​a​r​a​c​t​e​r​s
			 */
			regex: string
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​a​m​e​ ​i​s​ ​r​e​q​u​i​r​e​d
			 */
			required: string
		}
		/**
		 * Y​o​u​r​ ​p​o​s​i​t​i​o​n
		 */
		yourPosition: string
	}
	navbar: {
		/**
		 * A​c​c​o​u​n​t
		 */
		account: string
		/**
		 * D​a​s​h​b​o​a​r​d
		 */
		dashboard: string
		/**
		 * E​x​t​e​n​s​i​o​n​s
		 */
		extensions: string
		/**
		 * F​r​i​e​n​d​s
		 */
		friends: string
		/**
		 * L​e​a​d​e​r​b​o​a​r​d​s
		 */
		leaderboards: string
		/**
		 * L​o​g​ ​o​u​t
		 */
		logOut: string
		/**
		 * L​o​g​ ​i​n
		 */
		login: string
		/**
		 * R​e​g​i​s​t​e​r
		 */
		register: string
		/**
		 * S​e​t​t​i​n​g​s
		 */
		settings: string
	}
	profile: {
		authenticationToken: {
			/**
			 * A​u​t​h​e​n​t​i​c​a​t​i​o​n​ ​t​o​k​e​n
			 */
			title: string
			tooltip: {
				/**
				 * G​e​t​ ​y​o​u​r​ ​e​x​t​e​n​s​i​o​n​ ​f​r​o​m​ ​h​e​r​e​!
				 */
				install: string
				/**
				 * T​h​i​s​ ​t​o​k​e​n​ ​i​s​ ​u​s​e​d​ ​f​o​r​ ​a​u​t​h​e​n​t​i​c​a​t​i​o​n​ ​i​n​ ​y​o​u​r​ ​c​o​d​e​ ​e​d​i​t​o​r​.
				 */
				label: string
			}
		}
		changePassword: {
			confirm: {
				/**
				 * N​e​w​ ​p​a​s​s​w​o​r​d​s​ ​m​u​s​t​ ​m​a​t​c​h
				 */
				noMatch: string
				/**
				 * P​a​s​s​w​o​r​d​ ​c​o​n​f​i​r​m​a​t​i​o​n​ ​i​s​ ​r​e​q​u​i​r​e​d
				 */
				required: string
			}
			'new': {
				/**
				 * N​e​w​ ​p​a​s​s​w​o​r​d​ ​i​s​ ​i​n​v​a​l​i​d
				 */
				invalid: string
				/**
				 * N​e​w​ ​p​a​s​s​w​o​r​d​ ​i​s​ ​r​e​q​u​i​r​e​d
				 */
				required: string
				/**
				 * P​a​s​s​w​o​r​d​ ​c​a​n​ ​n​o​t​ ​b​e​ ​m​o​r​e​ ​t​h​a​n​ ​{​m​a​x​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
				 * @param {number} max
				 */
				tooLong: RequiredParams<'max'>
				/**
				 * P​a​s​s​w​o​r​d​ ​m​u​s​t​ ​b​e​ ​a​t​ ​l​e​a​s​t​ ​{​m​i​n​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
				 * @param {number} min
				 */
				tooShort: RequiredParams<'min'>
			}
			/**
			 * N​e​w​ ​p​a​s​s​w​o​r​d
			 */
			newPassword: string
			/**
			 * C​o​n​f​i​r​m​ ​p​a​s​s​w​o​r​d
			 */
			newPasswordConfirm: string
			old: {
				/**
				 * O​l​d​ ​p​a​s​s​w​o​r​d​ ​i​s​ ​i​n​c​o​r​r​e​c​t
				 */
				incorrect: string
				/**
				 * O​l​d​ ​p​a​s​s​w​o​r​d​ ​i​s​ ​r​e​q​u​i​r​e​d
				 */
				required: string
				/**
				 * P​a​s​s​w​o​r​d​ ​c​a​n​ ​n​o​t​ ​b​e​ ​m​o​r​e​ ​t​h​a​n​ ​{​m​a​x​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
				 * @param {number} max
				 */
				tooLong: RequiredParams<'max'>
				/**
				 * P​a​s​s​w​o​r​d​ ​m​u​s​t​ ​b​e​ ​a​t​ ​l​e​a​s​t​ ​{​m​i​n​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
				 * @param {number} min
				 */
				tooShort: RequiredParams<'min'>
			}
			/**
			 * O​l​d​ ​p​a​s​s​w​o​r​d
			 */
			oldPassword: string
			/**
			 * C​h​a​n​g​e​ ​p​a​s​s​w​o​r​d
			 */
			submit: string
			success: {
				/**
				 * Y​o​u​r​ ​p​a​s​s​w​o​r​d​ ​h​a​s​ ​b​e​e​n​ ​c​h​a​n​g​e​d​ ​s​u​c​c​e​s​s​f​u​l​l​y​.
				 */
				message: string
				/**
				 * P​a​s​s​w​o​r​d​ ​c​h​a​n​g​e​d
				 */
				title: string
			}
			/**
			 * C​h​a​n​g​e​ ​p​a​s​s​w​o​r​d
			 */
			title: string
		}
		friendCode: {
			/**
			 * F​r​i​e​n​d​ ​c​o​d​e
			 */
			title: string
			/**
			 * T​h​i​s​ ​c​o​d​e​ ​i​s​ ​u​s​e​d​ ​f​o​r​ ​s​h​a​r​i​n​g​ ​y​o​u​r​ ​d​a​t​a​ ​w​i​t​h​ ​y​o​u​r​ ​f​r​i​e​n​d​s​.
			 */
			tooltip: string
		}
		/**
		 * Y​o​u​ ​a​r​e​ ​n​o​t​ ​l​o​g​g​e​d​ ​i​n​.
		 */
		notLoggedIn: string
		/**
		 * R​e​g​i​s​t​r​a​t​i​o​n​ ​t​i​m​e​:​ ​{​r​e​g​i​s​t​r​a​t​i​o​n​T​i​m​e​}
		 * @param {string} registrationTime
		 */
		registrationTime: RequiredParams<'registrationTime'>
		settings: {
			/**
			 * D​e​f​a​u​l​t​ ​d​a​y​ ​r​a​n​g​e
			 */
			defaultDayRange: string
			/**
			 * L​a​n​g​u​a​g​e
			 */
			language: string
			/**
			 * S​m​o​o​t​h​ ​c​h​a​r​t​s
			 */
			smoothCharts: string
			/**
			 * S​e​t​t​i​n​g​s
			 */
			title: string
		}
		/**
		 * M​y​ ​p​r​o​f​i​l​e
		 */
		title: string
		/**
		 * U​s​e​r​n​a​m​e​:​ ​{​u​s​e​r​n​a​m​e​}
		 * @param {string} username
		 */
		username: RequiredParams<'username'>
	}
	prompt: {
		/**
		 * C​a​n​c​e​l
		 */
		cancel: string
		/**
		 * A​r​e​ ​y​o​u​ ​s​u​r​e​?
		 */
		confirmation: string
		/**
		 * Y​e​s
		 */
		yes: string
	}
	theme: {
		/**
		 * D​a​r​k​ ​m​o​d​e
		 */
		dark: string
		/**
		 * L​i​g​h​t​ ​m​o​d​e
		 */
		light: string
		/**
		 * T​o​g​g​l​e​ ​c​o​l​o​r​ ​t​h​e​m​e
		 */
		toggle: string
	}
}

export type TranslationFunctions = {
	copyToken: {
		/**
		 * Copied!
		 */
		copied: () => LocalizedString
		/**
		 * Copy
		 */
		copy: () => LocalizedString
		/**
		 * Hide
		 */
		hide: () => LocalizedString
		/**
		 * Regenerate
		 */
		regenerate: () => LocalizedString
		/**
		 * Reveal
		 */
		reveal: () => LocalizedString
	}
	dashboard: {
		/**
		 * Hello, {username}!
		 */
		greeting: (arg: { username: string }) => LocalizedString
		/**
		 * Languages
		 */
		languages: () => LocalizedString
		noData: {
			/**
			 * <link>Install one of the extensions<link> to begin tracking your programming.
			 */
			installPrompt: () => LocalizedString
			/**
			 * No programming activity data to display.
			 */
			title: () => LocalizedString
		}
		/**
		 * No projects
		 */
		noProjects: () => LocalizedString
		/**
		 * You are not logged in.
		 */
		notLoggedIn: () => LocalizedString
		/**
		 * Projects
		 */
		projects: () => LocalizedString
		/**
		 * Select a project filter
		 */
		projectsFilter: () => LocalizedString
		/**
		 * Your statistics
		 */
		statistics: () => LocalizedString
		timeFilters: {
			/**
			 * All time
			 */
			all: () => LocalizedString
			/**
			 * Last 30 days
			 */
			month: () => LocalizedString
			/**
			 * Last 7 days
			 */
			week: () => LocalizedString
		}
		/**
		 * Time per day
		 */
		timePerDay: () => LocalizedString
		/**
		 * Time per project
		 */
		timePerProject: () => LocalizedString
		/**
		 * Total time coded in the last {days} days: {totalTime}
		 */
		totalTime: (arg: { days: number, totalTime: string }) => LocalizedString
	}
	extensions: {
		/**
		 * Download the Testaustime extension for your favorite code editor!
		 */
		body: () => LocalizedString
		/**
		 * Download Testaustime for IntelliJ
		 */
		intellij: () => LocalizedString
		/**
		 * Download Testaustime for Micro
		 */
		micro: () => LocalizedString
		/**
		 * Download Testaustime for Neovim
		 */
		neovim: () => LocalizedString
		/**
		 * Extensions
		 */
		title: () => LocalizedString
		/**
		 * Download Testaustime for Visual Studio Code
		 */
		vscode: () => LocalizedString
	}
	footer: {
		authors: {
			/**
			 * Lead developers
			 */
			core: () => LocalizedString
			/**
			 *  and contributors
			 */
			rest: () => LocalizedString
			/**
			 * By: 
			 */
			suffix: () => LocalizedString
		}
		/**
		 * © {year} Testausserveri ry & contributors
		 */
		copyright: (arg: { year: number }) => LocalizedString
		/**
		 * Licensed under the MIT license.
		 */
		license: () => LocalizedString
		/**
		 * Source code
		 */
		source: () => LocalizedString
		/**
		 * Supported by Testausserveri ry
		 */
		supportedBy: () => LocalizedString
	}
	friends: {
		/**
		 * Add
		 */
		add: () => LocalizedString
		/**
		 * Add a new friend
		 */
		addNewFriend: () => LocalizedString
		error: {
			/**
			 * You are already friends with this user.
			 */
			alreadyFriends: () => LocalizedString
			/**
			 * User not found.
			 */
			notFound: () => LocalizedString
			/**
			 * Unknown error.
			 */
			unknownError: () => LocalizedString
		}
		/**
		 * Friend code
		 */
		friendCode: () => LocalizedString
		/**
		 * Friend code must start with "ttfc_", and be followed by 24 alphanumeric characters.
		 */
		friendCodeInvalid: () => LocalizedString
		/**
		 * Friend code is required
		 */
		friendCodeRequired: () => LocalizedString
		/**
		 * Statistics for user {username}
		 */
		friendDashboardTitle: (arg: { username: string }) => LocalizedString
		/**
		 * Friend name
		 */
		friendName: () => LocalizedString
		/**
		 * Index
		 */
		index: () => LocalizedString
		/**
		 * You are not logged in.
		 */
		notLoggedIn: () => LocalizedString
		/**
		 * View
		 */
		showDashboard: () => LocalizedString
		/**
		 * Time coded during last {days} days
		 */
		timeCoded: (arg: { days: number }) => LocalizedString
		/**
		 * Unfriend
		 */
		unfriend: () => LocalizedString
		/**
		 * Your friends
		 */
		yourFriends: () => LocalizedString
	}
	leaderboards: {
		/**
		 * Admin
		 */
		admin: () => LocalizedString
		/**
		 * Create
		 */
		create: () => LocalizedString
		/**
		 * Create new leaderboard
		 */
		createNewLeaderboard: () => LocalizedString
		/**
		 * Delete leaderboard
		 */
		deleteLeaderboard: () => LocalizedString
		/**
		 * Demote
		 */
		demote: () => LocalizedString
		/**
		 * Invite code
		 */
		inviteCode: () => LocalizedString
		join: {
			/**
			 * You are already a member of this leaderboard
			 */
			alreadyMember: () => LocalizedString
			/**
			 * Error joining leaderboard
			 */
			genericError: () => LocalizedString
			/**
			 * Join
			 */
			join: () => LocalizedString
			/**
			 * Leaderboard code
			 */
			leaderboardCode: () => LocalizedString
			/**
			 * Leaderboard code must start with "ttlic_", and be followed by 24 alphanumeric characters.
			 */
			leaderboardCodeInvalid: () => LocalizedString
			/**
			 * Leaderboard code is required
			 */
			leaderboardCodeRequired: () => LocalizedString
			/**
			 * Leaderboard not found
			 */
			notFound: () => LocalizedString
		}
		/**
		 * Join a leaderboard
		 */
		joinLeaderboard: () => LocalizedString
		/**
		 * Kick
		 */
		kick: () => LocalizedString
		/**
		 * Error creating leaderboard
		 */
		leaderboardCreateError: () => LocalizedString
		/**
		 * Leaderboard already exists
		 */
		leaderboardExists: () => LocalizedString
		/**
		 * Leaderboards
		 */
		leaderboards: () => LocalizedString
		/**
		 * Leave leaderboard
		 */
		leaveLeaderboard: () => LocalizedString
		/**
		 * Members
		 */
		members: () => LocalizedString
		/**
		 * Name
		 */
		name: () => LocalizedString
		/**
		 * You are not logged in.
		 */
		notLoggedIn: () => LocalizedString
		/**
		 * Position
		 */
		position: () => LocalizedString
		/**
		 * Promote
		 */
		promote: () => LocalizedString
		/**
		 * See more
		 */
		seeMore: () => LocalizedString
		/**
		 * Time coded last {days} days
		 */
		timeCoded: (arg: { days: number }) => LocalizedString
		/**
		 * Top member
		 */
		topMember: () => LocalizedString
		validation: {
			/**
			 * Leaderboard name must be at most {max} characters long
			 */
			max: (arg: { max: number }) => LocalizedString
			/**
			 * Leaderboard name must be at least {min} characters long
			 */
			min: (arg: { min: number }) => LocalizedString
			/**
			 * Leaderboard name must only contain alphanumeric characters
			 */
			regex: () => LocalizedString
			/**
			 * Leaderboard name is required
			 */
			required: () => LocalizedString
		}
		/**
		 * Your position
		 */
		yourPosition: () => LocalizedString
	}
	navbar: {
		/**
		 * Account
		 */
		account: () => LocalizedString
		/**
		 * Dashboard
		 */
		dashboard: () => LocalizedString
		/**
		 * Extensions
		 */
		extensions: () => LocalizedString
		/**
		 * Friends
		 */
		friends: () => LocalizedString
		/**
		 * Leaderboards
		 */
		leaderboards: () => LocalizedString
		/**
		 * Log out
		 */
		logOut: () => LocalizedString
		/**
		 * Log in
		 */
		login: () => LocalizedString
		/**
		 * Register
		 */
		register: () => LocalizedString
		/**
		 * Settings
		 */
		settings: () => LocalizedString
	}
	profile: {
		authenticationToken: {
			/**
			 * Authentication token
			 */
			title: () => LocalizedString
			tooltip: {
				/**
				 * Get your extension from here!
				 */
				install: () => LocalizedString
				/**
				 * This token is used for authentication in your code editor.
				 */
				label: () => LocalizedString
			}
		}
		changePassword: {
			confirm: {
				/**
				 * New passwords must match
				 */
				noMatch: () => LocalizedString
				/**
				 * Password confirmation is required
				 */
				required: () => LocalizedString
			}
			'new': {
				/**
				 * New password is invalid
				 */
				invalid: () => LocalizedString
				/**
				 * New password is required
				 */
				required: () => LocalizedString
				/**
				 * Password can not be more than {max} characters long
				 */
				tooLong: (arg: { max: number }) => LocalizedString
				/**
				 * Password must be at least {min} characters long
				 */
				tooShort: (arg: { min: number }) => LocalizedString
			}
			/**
			 * New password
			 */
			newPassword: () => LocalizedString
			/**
			 * Confirm password
			 */
			newPasswordConfirm: () => LocalizedString
			old: {
				/**
				 * Old password is incorrect
				 */
				incorrect: () => LocalizedString
				/**
				 * Old password is required
				 */
				required: () => LocalizedString
				/**
				 * Password can not be more than {max} characters long
				 */
				tooLong: (arg: { max: number }) => LocalizedString
				/**
				 * Password must be at least {min} characters long
				 */
				tooShort: (arg: { min: number }) => LocalizedString
			}
			/**
			 * Old password
			 */
			oldPassword: () => LocalizedString
			/**
			 * Change password
			 */
			submit: () => LocalizedString
			success: {
				/**
				 * Your password has been changed successfully.
				 */
				message: () => LocalizedString
				/**
				 * Password changed
				 */
				title: () => LocalizedString
			}
			/**
			 * Change password
			 */
			title: () => LocalizedString
		}
		friendCode: {
			/**
			 * Friend code
			 */
			title: () => LocalizedString
			/**
			 * This code is used for sharing your data with your friends.
			 */
			tooltip: () => LocalizedString
		}
		/**
		 * You are not logged in.
		 */
		notLoggedIn: () => LocalizedString
		/**
		 * Registration time: {registrationTime}
		 */
		registrationTime: (arg: { registrationTime: string }) => LocalizedString
		settings: {
			/**
			 * Default day range
			 */
			defaultDayRange: () => LocalizedString
			/**
			 * Language
			 */
			language: () => LocalizedString
			/**
			 * Smooth charts
			 */
			smoothCharts: () => LocalizedString
			/**
			 * Settings
			 */
			title: () => LocalizedString
		}
		/**
		 * My profile
		 */
		title: () => LocalizedString
		/**
		 * Username: {username}
		 */
		username: (arg: { username: string }) => LocalizedString
	}
	prompt: {
		/**
		 * Cancel
		 */
		cancel: () => LocalizedString
		/**
		 * Are you sure?
		 */
		confirmation: () => LocalizedString
		/**
		 * Yes
		 */
		yes: () => LocalizedString
	}
	theme: {
		/**
		 * Dark mode
		 */
		dark: () => LocalizedString
		/**
		 * Light mode
		 */
		light: () => LocalizedString
		/**
		 * Toggle color theme
		 */
		toggle: () => LocalizedString
	}
}

export type Formatters = {}
